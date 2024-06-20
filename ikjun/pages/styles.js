//styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
  },
  sideMenu: {
    width: '20%',
    backgroundColor: '#ddd',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  sideButton: {
    width: '90%',
    paddingVertical: 20,
    backgroundColor: '#bbb',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedSideButton: {
    backgroundColor: '#007BFF',
  },
  sideButtonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 0, // 좌우 여백을 없앰
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemScroll: {
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'column', // 세로 방향으로 정렬
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    height: 200, // 메뉴 박스의 세로 길이를 두 배로 설정
  },
  image: {
    width: '100%',  // 이미지 너비를 꽉 차게 설정
    height: '70%', // 이미지 높이를 조정하여 텍스트 공간 확보
    marginRight: 0,
    borderRadius: 5,
  },
  largeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  largeButton: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperatureGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  temperatureButton: {
    flex: 1,
    paddingVertical: 20, // 세로 방향 크기 증가
    paddingHorizontal: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  selectedButtonText: {
    color: '#fff',
    fontSize: 18, // 글씨 크기 증가
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,  // 수정
  },
  quantityButton: {
    padding: 15,  // 수정
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,  // 수정
  },
  cartContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  cartList: {
    flex: 1,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center', // 세로 기준 가운데 정렬
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5, // 좌우 여백을 줄이기
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cartText: {
    fontSize: 16,
    textAlign: 'center',
  },
  cartNameText: {
    flex: 2, // 메뉴명 칸의 flex 조정
    fontSize: 16,
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  orderDetailsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  orderButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  orderLargeButton: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cartButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  cartLargeButton: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  removeButton: {
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    marginLeft: 5, // 오른쪽 끝에 붙이기 위해 marginLeft로 조정
  },
  sideButton2: {
    width: '20%',
    paddingVertical: 20,
    backgroundColor: '#bbb',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedButtonHot: {
    backgroundColor: '#FF0000',
  },
  indexText: {
    width: 30,
    fontSize: 16,
    textAlign: 'center',
    marginRight: 5, // 왼쪽 끝에 붙이기 위해 marginRight로 조정
  },
  orderTypeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 10,
  },
  temperatureButtonText: {
    color: '#000', // 기본 텍스트 색상
  },
  audioPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  slider: {
    width: 200,
    height: 40,
  },
  // Detail 및 GuidePage를 위한 추가 스타일
  containerDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  backbuttonDetail: {
    backgroundColor: '#CFCECD',
    borderRadius: 5,
    justifyContent: 'center',
    width: 80,
    height: 50,
  },
  backbuttonDetail2: {
    backgroundColor: '#CFCECD',
    borderRadius: 5,
    justifyContent: 'center',
    width: 80,
    height: 50,
    position: 'absolute',
    top:10,
    left:10,
    alignItems: 'center'
  },
  orderStageDetail: {
    fontWeight: 'bold',
    fontSize: 40,
    marginVertical: 10,
  },
  callbuttonDetail:{
    backgroundColor: '#FFB300',
    borderRadius: 5,
    justifyContent: 'center',
    width: 80,
    height: 50,
  },
  callbuttonOrder: {
    backgroundColor: '#FFB300',
    borderRadius: 5,
    justifyContent: 'center',
    width: 80,
    height: 50,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  guideBackbutton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  callstaffDetail: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  middleDetail: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middletextDetail: {
    backgroundColor: '#007BFF',
    paddingVertical: 50,
    paddingHorizontal: 50,
    borderRadius: 10,
    margin: 20,
  },
  guidetextDetail: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainerDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonDetail: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textDetail: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomDetail: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageDetail: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  orderContainerDetail: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderDetailsContainerDetail: {
    alignItems: 'center',
  },
  largeImageDetail: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  itemNameDetail: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  quantityContainerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  quantityButtonDetail: {
    padding: 15,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  orderButtonGroupDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  orderLargeButtonDetail: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonTextDetail: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButtonTextDetail: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedButtonTextDetail: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceTextDetail: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  quantityTextDetail: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  messageContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -200 }, { translateY: -50 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    zIndex: 2,
  },
  messageText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  dama:{
    fontSize: 20
  }
});

export default styles;



