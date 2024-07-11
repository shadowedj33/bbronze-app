const database = 'test';
const collection = 'services';

use(database);


const servicesData = [
    {name: "Full Body OG Bronze", price: 60, category: "Service", description: "Original solution, 4 options to choose from depending on desired depth.", processingTime: "8 hours"},
    {name: "Full Body Rapid Bronze", price: 65, category: "Service", description: "Rapid solution, time depending on your desired depth.", processingTime: "2-5 hours"},
    {name: "Full Body Luxe Bronze", price: 60, category: "Service", description: "Luxe Bronze solution, 2 options to choose from depending on desired depth.", processingTime: "8 hours"},
    {name: "Full Body Rapid Luxe Bronze", price: 65, category: "Service", description: "Rapid Luxe Bronze solution, time depending on your desired depth.", processingTime: "2-5 hours"},
    {name: "Partial Body OG Bronze", price: 35, category: "Service", description: "Original solution, 4 options depending on your desired depth.", processingTime: "2-5 hours"},
    {name: "Partial Body Rapid Bronze", price: 40, category: "Service", description: "Rapid solution, time depending on your desired depth.", processingTime: "2-5 hours"},
    {name: "Partial Body Luxe Bronze", price: 35, category: "Service", description: "Luxe Bronze solution, 2 options depending on your desired depth.", processingTime: "2-5 hours"},
    {name: "Partial Body Rapid Luxe Bronze", price: 40, category: "Service", description: "Rapid Luxe Bronze solution, time depending on your desired depth.", processingTime: "2-5 hours"},
    {name: "Light Contour", price: 5, category: "Add-on", description: "Light contouring to help define muscles/physique.", processingTime: "15-30 minutes"},
    {name: "Intense Contour", price: 10, category: "Add-on", description: "Intense contouring to help define muscles/physique.", processingTime: "15-30 minutes"},
];

db.services.insertMany(servicesData);

console.log('${database}.${collection} has ${db.products.countDocuments()} documents.');
