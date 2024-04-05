import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  App:{
    backgroundColor: '#E5F8FF',
    flexGrow: 1,
    alignItems: 'center',
  },
  imgSorvete:{
    backgroundColor: '#E5F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  titleSorvete:{
    fontFamily: 'poppins-bold',
    color: '#380000',
    fontSize: 32,
    margin: 0,
  },
  descriptionSorvete:{
    fontFamily: 'poppins-regular',
    color: '#380000',
    fontSize: 14,
    margin: 0,
  },

  boxVerticalCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%'
  },
  boxVerticalStart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
    gap: -5
  },
  boxVerticalStartLoader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
    gap: 5
  },
  boxHorizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  boxHorizontalSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%'
  },
  boxHorizontalStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%'
  },
  boxVerticalEnd: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 10,
    width: '100%'
  },
  cardProduct: {
    backgroundColor:'#fff',
    borderRadius: 20,
    flexGrow: 1,
    width: '45%',
    maxWidth: '48%'
  },
  imgProduct: {
    backgroundColor:'#F4FCFF',
    borderRadius: 20,
    width: '100%',
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCard: {
    color: '#FF90C8',
    backgroundColor:'#FFD7EB',
    padding: 5,
    borderRadius: 100,
  },
  textPrice: {
    fontFamily:'titan-one',
    color:'#197CFF',
    fontSize: 30,
    margin: 0,
  },
  textPriceRs: {
    fontFamily:'titan-one',
    color:'#FF40A0',
    fontSize: 16,
    margin: 0,
  },
  shareBtn:{
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#E5F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  shareText:{
    fontFamily: 'poppins-regular',
    color: '#6AAAFF'
  },
  btnRoundedSm:{
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 100,
    width: 'auto',
    alignItems: 'center',
  },
  btnRounded:{
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 100,
    width: 'auto',
    alignItems: 'center',
  },
  textBtns:{
    fontFamily: 'titan-one',
    color: '#fff',
    fontSize: 14
  },
  textBtnLarge:{
    fontFamily: 'titan-one',
    color: '#fff',
    fontSize: 18
  },
  boxEscolher:{
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12,
    gap: 10,
    marginBottom: 20
  },
  boxItem:{
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  textItems: {
    fontFamily: 'poppins-regular',
    fontSize: 10,
    color: '#380000'
  },
  boxItems:{
    height: '60%',
    width: '100%',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})