const seeder = require('mongoose-seed');

seeder.connect('mongodb://db:27017/totvs_development', () => {
  seeder.loadModels([
    'models/defaulting.model.js'
  ]);

  seeder.clearModels(['Defaulting'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});


var data = [
  {
    'model': 'Defaulting',
    'documents': [
      {
        'name': 'José Ricardo Santo',
        'price': 50.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Baruf Palino Souza',
        'price': 55.6,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Robert Aberto',
        'price': 178.45,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Cássio de Oliveira Filho',
        'price': 10.43,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Lurdes Souza Castro',
        'price': 469.89,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'José Roberto Filho',
        'price': 70.54,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Junior Souza Santos',
        'price': 554.50,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },{
        'name': 'Caique Junior',
        'price': 4450.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
      ,{
        'name': 'Dennys Henrique',
        'price': 5343.90,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
      ,{
        'name': 'Carol Silva',
        'price': 5020.80,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Alberto Souza',
        'price': 1.050,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Gilberto Guimarães',
        'price': 640.08,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Carlos Alberto Junior',
        'price': 5380.06,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Luiz Torres',
        'price': 14.60,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
    ]
  }
];