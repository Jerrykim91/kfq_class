import torch
import torch.nn.functional as F 
# 07-mini_project_mnist.ipynb 처음 사용

def train(model, train_loader, loss_func, optimizer, step, device, print_step=200):
    """train function: 1 스텝 동안 발생하는 학습과정"""
    # 모델에게 훈련단계이라고 선언함
    model.train()        
    for batch_idx, (data, target) in enumerate(train_loader):
        # 입력과 타겟 텐서에 GPU 를 사용여부 전달
        data, target = data.to(device), target.to(device)
        
        # 경사 초기화 : 역전파 단계를 실행하기 전에 변화도를 0으로 만듭니다.
        optimizer.zero_grad()
        
        # 순방향전파  : 훈련데이터를 넣어서 출력
        # 모델에 data를 전달하여 예상되는 output 값을 계산합니다.
        # __call__ 함수는 이 클래스의 객체가 함수처럼 호출되면 실행되는 함수이다. model(데이터전달)
        # 이렇게 함으로써 입력 데이터 Tensor를 Module에 전달하여 출력 데이터 Tensor를 생성
        output = model(data)

        # 손실값 계산     
        # 손실을 계산하고 출력합니다. 
        # 예측한 output Tensor 와 정답인 target Tensor들을 전달하고,
        # 손실 함수는 손실 값 Tensor를 반환.   
        loss = loss_func(output, target)

        # 역방향 전파
        # 역전파 단계: 모델의 학습 가능한 모든 매개변수에 대해 손실의 변화도 계산. 
        # 모든 모델의 모든 학습 가능한 매개변수의 변화도를 계산.
        loss.backward()

        # 매개변수 업데이트
        optimizer.step()
        
        # 중간 과정 print
        # 0, 160, 320번째 출력
        if batch_idx % print_step == 0:
            print('Train Step: {} ({:05.2f}%)  \tLoss: {:.4f}'.format(
                step, 100.*(batch_idx*train_loader.batch_size)/len(train_loader.dataset), 
                loss.item()))
            
def test(model, test_loader, loss_func, device):
    """test function"""
    # 모델에게 평가단계이라고 선언함
    model.eval()
    test_loss = 0
    correct = 0

    # 경사하강법(gradient descent)를 사용하여 가중치를 갱신.
    with torch.no_grad():
        for data, target in test_loader:
            # 입력과 타겟 텐서에 GPU 를 사용여부 전달
            data, target = data.to(device), target.to(device)

            # 순방향전파
            # 테스트 데이터를 넣어서 출력 예측결과 획득
            output = model(data)
            
            # 손실값 계산(합)
            # 손실값들의 합산으로 그데이터 획득
            test_loss += loss_func(output, target, reduction="sum").item()

            # 예측 값에 해당하는 클래스 번호 반환
            # 예측값은 가장 높은값(argmax( dim=2차원 위치, keepdim=차원유지))을 받은 항목 출력
            pred = output.softmax(1).argmax(dim=1, keepdim=True)

            # 정확하게 예측한 개수를 기록한다
            # 논리연산을 통해서 예측과 같은 차원으로 정답을 조정하여
            # 정답(1)의 총합을 구하고 그 데이터를 획득
            correct += pred.eq(target.view_as(pred)).sum().item()
            
    # 전체 데이터수 대비 손실률 값
    test_loss /= len(test_loader.dataset)
    
    # 전체 데이터수 대비 정답값 비율
    test_acc = correct / len(test_loader.dataset)

    print('Test set: Average loss: {:.4f}, Accuracy: {}/{} ({:05.2f}%)'.format(
        test_loss, correct, len(test_loader.dataset), 100. * test_acc))
    return test_loss, test_acc


# 훈련 및 테스트
def main(model, train_loader, test_loader, loss_func, optimizer, n_step, device, save_path=None, print_step=200):
    """메인 학습 함수"""
    test_accs = []
    best_acc = 0.0

    for step in range(1, n_step+1):
        # 훈련 단계
        train(model, train_loader, loss_func, optimizer, 
              step=step, device=device, print_step=print_step)
        # 평가 단계
        test_loss, test_acc = test(model, test_loader, 
                                   loss_func=F.cross_entropy, 
                                   device=device)
        # 테스트 정확도 기록
        test_accs.append(test_acc)
        # 모델 최적의 매개변수값을 저장할지 결정하고 기록한다.
        if len(test_accs) >= 2:
            if test_acc >= best_acc:
                best_acc = test_acc
                best_state_dict = model.state_dict()
                print("discard previous state, best model state saved!")
        print("")

    # 매개변수 값 저장하기
    if save_path is not None:
        torch.save(best_state_dict, save_path)