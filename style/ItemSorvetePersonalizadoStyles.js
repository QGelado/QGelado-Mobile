import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    gap: 20,
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
  boxSorvete:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  textItems: {
    fontFamily: 'poppins-regular',
    fontSize: 10,
    color: '#380000',
    textAlign: 'center'
  },
  buttonCard: {
    color: '#E5F8FF',
    backgroundColor:'#C3EFFF',
    padding: 5,
    borderRadius: 100,
    width: 30,
  },
  gradient:{
    padding: 3, 
    borderRadius: 12, 
    width: 100, 
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText:{
    fontFamily: 'poppins-regular',
    color: '#6AAAFF'
  },
  btnRoundedSm:{
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 100,
    width: 'auto',
    alignItems: 'center',
    marginBottom: -8,
    zIndex: 2
  },
  textBtnLarge:{
    fontFamily: 'titan-one',
    color: '#fff',
    fontSize: 10
  },
})