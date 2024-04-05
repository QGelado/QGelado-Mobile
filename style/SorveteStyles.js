import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  App:{
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  infoSorvete:{
    backgroundColor: '#fff',
    flexGrow: 1,
    padding:20,
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
    fontSize: 35,
    margin: 0,
  },
  textPriceRs: {
    fontFamily:'titan-one',
    color:'#FF40A0',
    fontSize: 18,
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
  btnCart:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF90C8',
    borderRadius: 100
  },
  btnQuantidade:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#197CFF',
    borderRadius: 100
  },
  textBtns:{
    fontFamily: 'titan-one',
    color: '#fff',
    fontSize: 16
  }
})