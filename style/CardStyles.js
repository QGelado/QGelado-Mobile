import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  titleCard:{
    fontFamily: 'poppins-bold',
    color: '#380000',
    fontSize: 18,
    margin: 0,
    width: '100%'
  },
  descriptionCard:{
    fontFamily: 'poppins-regular',
    color: '#380000',
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
    fontSize: 19,
    margin: 0,
  },
  textPriceRs: {
    fontFamily:'titan-one',
    color:'#FF40A0',
    fontSize: 12,
    margin: 0,
  },
})