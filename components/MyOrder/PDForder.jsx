import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignContent: 'center'
  },
  info: {
    backgroundColor: "#81c784",
    height: '100px',
    width: '100%'
  },
  row: {
    flexDirection: 'row',

  },
  block: {
    justifyContent: 'center',
    alignContent: 'center',

  },
  text: {
    width: '80%',
    margin: 10,
  },
  total: {
    width: '100%',
    height: '25px'
  }
});


const PDForder = ({ cart, total, dataUser }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>

        <View style={styles.info}>
          <Text>Orden de su pedido</Text>
          <Text>{`Estimado/a ${dataUser.username} su pedido sera entregdo a ${dataUser.address}`}</Text>
        </View>

        <View style={styles.block}>
          {cart.map((item, index) => (
            <View style={styles.row} key={index}>
              <Image
                src={item.image}
                alt="random image"
                style={{ maxWidth: "50px", maxHeight: "50px" }}
              />
              <Text style={styles.text}>
                {item.name}
              </Text>
              <Text style={styles.text}>
                {item.quantity}
              </Text>

            </View>
          ))}
        </View>
        <View style={styles.total}>
          <Text>{`El total de su cuenta es $${dataUser.total}`}</Text>
        </View>
        <View style={styles.total}>
          <Text style={{ marginBottom: '15px' }}>
            Cualquier duda, consulta o reclamacion hacerla
          </Text>
          <Text style={{ marginBottom: '15px' }}>
            a divierremedios@gmail.com
          </Text>
          <Text style={{ marginBottom: '15px' }}>
            Gracias por su compra
          </Text>
        </View>

      </Page>
    </Document>
  );
}


export default PDForder