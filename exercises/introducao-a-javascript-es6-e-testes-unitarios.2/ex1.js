const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
      const pessoa = order.order.delivery.deliveryPerson;
      const nome = order.name;
      const telefone = order.phoneNumber;
      const rua = order.address.street;
      const numero = order.address.number;
      const apto = order.address.apartment;
    console.log(`olá ${pessoa}, entrega para: ${nome}, Telefone ${telefone}, R. ${rua}, ${numero}, ${apto}`)
    }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const luiz = order.name = "Luiz Silva";
    const preco = order.order.payment = "R$ 50,00";
    const coca0 = order.order.drinks.coke.type;
    console.log(`Olá ${luiz}, o total do seu pedido de muzzarella, calabresa e ${coca0} é ${preco}`);
  
  }
  
  orderModifier(order);