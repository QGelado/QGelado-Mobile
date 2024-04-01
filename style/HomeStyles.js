import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  App:{
    backgroundColor: '#E5F8FF',
    flexGrow: 1,
    padding:20,
  },
  Container: {
    flexGrow: 1,
    gap: 10,
    display: 'flex',
    paddingBottom: 10
  },
  bold: {
    fontFamily: 'poppins-bold',
  },
  boxVerticalCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  boxHorizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  titleHome: {
    color: '#380000',
    fontSize: 25,
    fontFamily: 'poppins-regular'
  },
  textHome: {
    color: '#380000',
    fontSize: 14,
    fontFamily: 'poppins-regular'
  },
  inputFilter: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    color: '#C4C4C4',
    width: '85%',
  },
  buttonSearch: {
    color: '#FF40A0',
    backgroundColor:'#FFC2E1',
    padding: 13,
    borderRadius: 100,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  textChip: {
    color: '#fff'
  },
  cardProduct: {
    backgroundColor:'#fff',
    borderRadius: 10,
    flexGrow: 1,
    width: '45%'
  },
  imgProduct: {
    backgroundColor:'#F4FCFF',
    borderRadius: 10,
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxMontaSorvete:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    width: '100%',
    height: 60,
    padding: 15,
    borderRadius: 15,
  },
  textMonteSorvete:{
    fontFamily: 'titan-one',
    color: '#fff',
    fontSize: 22,
  },
  imgMontaSorvete: {
    transform: [{rotate: '10deg'}]
  },
  linkMore: {
    width: '100%',
    textAlign: 'center',
    transform: [{rotate: '90deg'}],
    paddingLeft: 5,
    paddingRight: 30,
  },
  more: {
    fontFamily: 'titan-one',
    color: '#197CFF',
    fontSize: 40,
  }
})