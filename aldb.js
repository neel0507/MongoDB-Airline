db = connect ("localhost:27017/aldb")

//-------------------------------------------Pilots Collection---------------------------------------------------------------//

db.pilots.insert({pid:1, name:'Magan', address: {street: '155 Bourne Street', pcode: 'B16 7XY'}, phonenumber:'0789546780', testdate: new Date(2017, 01, 01, 12, 00)});

db.pilots.insert({pid:2, name:'James', address: {street: '156 Bourne Street', pcode: 'B16 7XA'}, phonenumber:'0789546782', testdate: new Date(2017, 01, 02, 1, 00)});

db.pilots.insert({pid:3, name:'Michael', address: {street: '157 Bourne Street', pcode: 'B16 7XB'}, phonenumber:'0789546783', testdate: new Date(2017, 01, 03, 2, 00)});

db.pilots.insert({pid:4, name:'Thomas', address: {street: '158 Bourne Street', pcode: 'B16 7XC'}, phonenumber:'0789546784', testdate: new Date(2017, 01, 04, 3, 00)});

db.pilots.insert({pid:5, name:'Omar', address: {street: '159 Bourne Street', pcode: 'B16 7XD'}, phonenumber:'0789546785', testdate: new Date(2017, 01, 05, 4, 00)});

db.pilots.insert({pid:6, name:'Ricky', address: {street: '150 Bourne Street', pcode: 'B16 7XE'}, phonenumber:'0789546786', testdate: new Date(2017, 01, 05, 4, 00)});

db.pilots.insert({pid:7, name:'Neel', address: {street: '151 Bourne Street', pcode: 'B16 8AB'}, phonenumber:'0789546787', testdate: new Date(2017, 01, 01, 12, 00)});

db.pilots.insert({pid:8, name:'Bill', address: {street: '152 Bourne Street', pcode: 'B16 8CD'}, phonenumber:'0789546788', testdate: new Date(2017, 01, 02, 1, 00)});

db.pilots.insert({pid:9, name:'Harry', address: {street: '153 Bourne Street', pcode: 'B16 8EF'}, phonenumber:'0789546789', testdate: new Date(2017, 01, 03, 2, 00)});

db.pilots.insert({pid:10, name:'Root', address: {street: '154 Bourne Street', pcode: 'B16 8GH'}, phonenumber:'0789546712', testdate: new Date(2017, 01, 04, 3, 00)});

db.pilots.insert({pid:11, name:'Oliver', address: {street: '161 Bourne Street', pcode: 'B16 8IJ'}, phonenumber:'0789546734', testdate: new Date(2017, 01, 05, 4, 00)});

db.pilots.insert({pid:12, name:'Barn', address: {street: '162 Bourne Street', pcode: 'B16 8KL'}, phonenumber:'0789546756', testdate: new Date(2017, 01, 05, 4, 00)});

//-------------------------------------------------Planes Collection---------------------------------------------------------//

db.planes.insert({planeID:1, make: 'Rangers', model: 'Boieng 777', flyingrange: '0-80000', servicelength: 20, status:'working', scap: 500});

db.planes.insert({planeID:2, make: 'Charters', model: 'Jet 778', flyingrange: '0-50000', servicelength: 30, status: 'working', scap: 400});

db.planes.insert({planeID:3, make: 'Bonafires', model: 'Rasp 779', flyingrange: '0-40000', servicelength: 10, status:'working', scap: 300});

db.planes.insert({planeID:4, make: 'Hogwarts', model: 'Manz 770', flyingrange: '0-60000', servicelength: 50, status:'working', scap: 200});

db.planes.insert({planeID:5, make: 'Seige', model: 'Ris 771', flyingrange: '0-70000', servicelength: 40, status:'working', scap: 450});

db.planes.insert({planeID:6, make: 'Kingone', model: 'Arz 772', flyingrange: '0-50000', servicelength: 25, status:'working', scap: 550});

db.planes.insert({planeID:7, make: 'Frutzer', model: 'Treat 151', flyingrange: '0-40000', servicelength: 10, status:'in repair', scap: 200});

db.planes.insert({planeID:8, make: 'Crayon', model: 'Doom 766', flyingrange: '0-20000', servicelength: 30, status:'in repair', scap: 450});

db.planes.insert({planeID:9, make: 'Clarks', model: 'Eye 131', flyingrange: '0-30000', servicelength: 20, status:'in upgrade', scap: 550});

//-------------------------------------------Revenue collection--------------------------------------------------------------//

var otherProfit = 300000;

db.revenue.insert({revenueref:'A01', revenue:  otherProfit - bc - (ts - tac)}); 

//----------------------------------------------------Airports collection---------------------------------------------------//
var ref = db.revenue.findOne({"revenueref": 'A01'});

var hours = 2;

db.airports.insert({apcode:'LHR', airport:'Heathrow', location:'London', totalcost:{phc: hours*10000, rc:5000}, revenueref: ref.revenueref});

db.airports.insert({apcode:'AUH', airport:'Abu Dhabi International', location:'Abu Dhabi', totalcost:{phc: hours*9000, rc:6000}, revenueref: ref.revenueref});

db.airports.insert({apcode:'HND', airport:'Haneda Airport', location:'Tokyo', totalcost:{phc: hours*8000, rc:4000}, revenueref: ref.revenueref});

db.airports.insert({apcode:'CDG', airport:'Charles de Gaulle', location:'Paris', totalcost:{phc: hours*7000, rc:1000}, revenueref: ref.revenueref});

db.airports.insert({apcode:'JFK', airport:'John F Keneddy', location:'New York', totalcost:{phc: hours*6000, rc:3000}, revenueref: ref.revenueref});

db.airports.insert({apcode:'FKT', airport:'Frankfurt International Airport', location:'Frankfurt', totalcost:{phc: hours*5000, rc:2000}, revenueref: ref.revenueref});

//-----------------------------------------------Journeys collection--------------------------------------------------------//

var a1 = db.airports.findOne({"apcode" : "LHR"});
var a2 = db.airports.findOne({"apcode" : "AUH"});
var a3 = db.airports.findOne({"apcode" : "HND"});
var a4 = db.airports.findOne({"apcode" : "CDG"});
var a5 = db.airports.findOne({"apcode" : "JFK"});
var a6 = db.airports.findOne({"apcode" : "FKT"});

db.journeys.insert({jID:100, journey: [{startingairport:a1.airport, apcode:a1.apcode}, {destairport:a2.airport, apcode:a2.apcode}], journeylength:7000});

db.journeys.insert({jID:101, journey: [{startingairport:a3.airport, apcode:a3.apcode}, {destairport:a1.airport, apcode:a1.apcode}], journeylength:16000});

db.journeys.insert({jID:102, journey: [{startingairport:a4.airport, apcode:a4.apcode}, {destairport:a2.airport, apcode:a2.apcode}], journeylength:5000});

db.journeys.insert({jID:103, journey: [{startingairport:a5.airport, apcode:a5.apcode}, {destairport:a1.airport, apcode:a1.apcode}], journeylength:15000});

//----------------------------------------------------PlaneFlights Collection------------------------------------------------//

var p1 = db.pilots.findOne({"pid" : 1});
var p2 = db.pilots.findOne({"pid" : 2});
var p3 = db.pilots.findOne({"pid" : 3});
var p4 = db.pilots.findOne({"pid" : 4});
var p5 = db.pilots.findOne({"pid" : 5});
var p6 = db.pilots.findOne({"pid" : 6});
var p7 = db.pilots.findOne({"pid" : 7});
var p8 = db.pilots.findOne({"pid" : 8});
var p9 = db.pilots.findOne({"pid" : 9});
var p10 = db.pilots.findOne({"pid" : 10});
var p11 = db.pilots.findOne({"pid" : 11});
var p12 = db.pilots.findOne({"pid" : 12});

var pl1 = db.planes.findOne({"planeID" : 1});
var pl2 = db.planes.findOne({"planeID" : 2});
var pl3 = db.planes.findOne({"planeID" : 3});
var pl4 = db.planes.findOne({"planeID" : 4});
var pl5 = db.planes.findOne({"planeID" : 5});
var pl6 = db.planes.findOne({"planeID" : 6});

var j1 = db.journeys.findOne({"jID" : 100});
var j2 = db.journeys.findOne({"jID" : 101});
var j3 = db.journeys.findOne({"jID" : 102});
var j4 = db.journeys.findOne({"jID" : 103});

db.planeFlights.insert({planeID:pl6.planeID, jID:j1.jID, model:pl6.model, startingpoint:a1.location, destination:a2.location, timedepart: new Date(2016,12,23,18,00), timearrival: new Date(2016,12,24,00,20), pilots: [{pid:p1.pid, name: p1.name}, {pid:p2.pid, name:p2.name}]});

db.planeFlights.insert({planeID:pl5.planeID, jID:j2.jID, model:pl5.model, startingpoint:a3.location, destination:a6.location, timedepart: new Date(2017,01,01,09,00), timearrival: new Date(2017,01,02,21,40), pilots: [{pid:p3.pid, name: p3.name}, {pid:p4.pid, name:p4.name}]});

db.planeFlights.insert({planeID:pl4.planeID, jID:j2.jID, model:pl4.model, startingpoint:a6.location, destination:a1.location, timedepart: new Date(2017,01,02,11,00), timearrival: new Date(2017,01,03,18,20), pilots: [{pid:p5.pid, name: p5.name}, {pid:p6.pid, name:p6.name}]});

db.planeFlights.insert({planeID:pl3.planeID, jID:j3.jID, model:pl3.model, startingpoint:a4.location, destination:a2.location, timedepart: new Date(2017,01,18,11,00), timearrival: new Date(2017,01,19,17,45), pilots: [{pid:p7.pid, name: p7.name}, {pid:p8.pid, name:p8.name}]});

db.planeFlights.insert({planeID:pl2.planeID, jID:j4.jID,  model:pl2.model, startingpoint:a5.location, destination:a4.location, timedepart: new Date(2016,12,24,11,00), timearrival: new Date(2016,12,24,23,50), pilots: [{pid:p9.pid, name: p9.name}, {pid:p10.pid, name:p10.name}]});

db.planeFlights.insert({planeID:pl1.planeID, jID:j4.jID, model:pl1.model, startingpoint:a4.location, destination:a1.location, timedepart: new Date(2016,12,25,01,00), timearrival: new Date(2016,12,25,18,20), pilots: [{pid:p11.pid, name: p11.name}, {pid:p12.pid, name:p12.name}]}); 

//----------------------------------Airline Employees collection-------------------------------------------------------------//

db.airlineEmployees.insert({planeflight: [{planeID:pl6.planeID, jID:j1.jID}], maintenancestaff: [{mstaff:'Peter', salary:5000}, {mstaff:'Muhammad', salary:7000}], cabinstaff: [{cstaff:'Jack', salary:9000}, {cstaff:'mary', salary:8000}], bookingclerk: [{bcID:1001, name:'Rehan', salary:5000}], pilots: [{pid:p1.pid, salary:15000}, {pid:p2.pid, salary:18000}], revenueref: ref.revenueref});
 
db.airlineEmployees.insert({planeflight: [{planeID:pl3.planeID, jID:j3.jID}], maintenancestaff:[{mstaff:'Thomas', salary:6000}, {mstaff:'Mary', salary: 4000}], cabinstaff:[{cstaff:'Derek', salary: 4500}, {cstaff:'Max', salary:5500}], bookingclerk:[{bcID:1002, name:'Chris', salary:6000}], pilots: [{pid:p3.pid, salary:12000}, {pid:p4.pid, salary:13000}], revenueref: ref.revenueref});
 
db.airlineEmployees.insert({planeflight: [{planeID:pl2.planeID, jID:j4.jID}], maintenancestaff:[{mstaff:'Fatimah', salary:5000}, {mstaff:'Ayesha', salary:7000}],cabinstaff:[{cstaff:'sarah', salary:8000}, {cstaff:'Jim', salary:4000}], bookingclerk:[{bcID:1003, name:'Wayne', salary:9000}], pilots: [{pid:p5.pid, salary:11000}, {pid:p6.pid, salary:11500}], revenueref: ref.revenueref});
 
db.airlineEmployees.insert({planeflight: [{planeID:pl1.planeID, jID:j4.jID}], maintenancestaff:[{mstaff:'Lisa', salary:4000}, {mstaff:'Fatimah', salary:6000}],cabinstaff:[{cstaff:'Mustafa', salary:7000}, {cstaff:'sarah', salary:8000}], bookingclerk:[{bcID:1003, name:'Wayne', salary:9000}], pilots: [{pid:p7.pid, salary:14000}, {pid:p8.pid, salary:15000}], revenueref: ref.revenueref});
 
db.airlineEmployees.insert({planeflight: [{planeID:pl5.planeID, jID:j2.jID}], maintenancestaff:[{mstaff:'Ragby', salary:7000},{mstaff:'Harry', salary:5000}], cabinstaff:[{cstaff:'Tamari', salary:5000}, {cstaff:'Shikumaru', salary:6000}], bookingclerk:[{bcID:1005, name:'Steve', salary:8000}], pilots: [{pid:p9.pid, salary:11000}, {pid:p10.pid, salary:12000}], revenueref: ref.revenueref});
 
db.airlineEmployees.insert({planeflight: [{planeID:pl4.planeID, jID:j2.jID}], maintenancestaff:[{mstaff:'Ayesha', salary:4000},{mstaff:'Mag', salary:7000}],cabinstaff:[{cstaff:'Humza', salary:8000}, {cstaff:'Yusuf', salary:9000}], bookingclerk:[{bcID:1005, name:'Steve', salary:5000}], pilots: [{pid:p11.pid, salary:15000}, {pid:p12.pid, salary:20000}], revenueref: ref.revenueref});

//-------------------------------------FlightBookings Collection-------------------------------------------------------------//

db.flightBookings.insert({fbID:1100, bcID:1003, customername:'Luffy', passengers:[{p1:'Luffy'}, {p2:'Nami'}], bookingtime: new Date(2016,11,15,12,30), revenueref: ref.revenueref, bcost:300, planeflight: [{planeID:pl2.planeID, jID:j4.jID}]});
 
db.flightBookings.insert({fbID:1101, bcID:1002, customername:'Oliva', passengers:[{p1:'Oliva'}, {p2:'Tom'}], bookingtime: new Date(2016,11,17,14,30), revenueref: ref.revenueref, bcost:500, planeflight: [{planeID:pl3.planeID, jID:j3.jID}]});
 
db.flightBookings.insert({fbID:1102, bcID:1003, customername:'Luffy', passengers:[{p1:'Luffy'}, {p2:'Nami'}], bookingtime: new Date(2016,11,15,15,30), revenueref: ref.revenueref, bcost:300, planeflight: [{planeID:pl1.planeID, jID:j4.jID}]});
 
db.flightBookings.insert({fbID:1103, bcID:1001, customername:'Harry', passengers:[{p1:'Harry'}, {p2:'Bert'}], bookingtime: new Date(2016,12,15,14,30), revenueref: ref.revenueref, bcost:400, planeflight: [{planeID:pl6.planeID, jID:j1.jID}]});
 
db.flightBookings.insert({fbID:1104, bcID:1005, customername:'George', passengers:[{p1:'Same'}, {p2:'George'}], bookingtime: new Date(2016,11,15,12,30), revenueref: ref.revenueref, bcost:250, planeflight: [{planeID:pl5.planeID, jID:j2.jID}]});
 
db.flightBookings.insert({fbID:1105, bcID:1005, customername:'George', passengers:[{p1:'Sam'}, {p2:'George'}], bookingtime: new Date(2016,11,15,12,30), revenueref: ref.revenueref, bcost:250, planeflight: [{planeID:pl4.planeID, jID:j2.jID}]});

//---------------------------------------Different collections for calculating the revenue-----------------------------------//

var tbc = db.flightBookings.aggregate({$group: {"_id": null, "sum": { $sum: "$bcost"}}},{$project: {"_id" : 0, "sum" : 1}});

var tsm = db.airlineEmployees.aggregate([{$unwind: "$maintenancestaff"},{ $group: { "_id": null, "sum": { $sum: "$maintenancestaff.salary"}}},{ $project: {"_id": 0, "sum" : 1}}]);

var tsc = db.airlineEmployees.aggregate([{$unwind: "$cabinstaff"},{ $group: { "_id": null, "sum": { $sum: "$cabinstaff.salary"}}},{ $project: {"_id": 0, "sum" : 1}}]);

var tsb = db.airlineEmployees.aggregate([{$unwind: "$bookingclerk"},{ $group: { "_id": null, "sum": { $sum: "$bookingclerk.salary"}}},{ $project: {"_id": 0, "sum" : 1}}]);

var tsp = db.airlineEmployees.aggregate([{$unwind: "$pilots"},{ $group: { "_id": null, "sum": { $sum: "$pilots.salary"}}},{ $project: {"_id": 0, "sum" : 1}}]);

var tphc = db.airports.aggregate({$group: {"_id": null, "sum": { $sum: "$totalcost.phc"}}},{$project: {"_id" : 0, "sum" : 1}});

var trc = db.airports.aggregate({$group: {"_id": null, "sum": { $sum: "$totalcost.rc"}}},{$project: {"_id" : 0, "sum" : 1}});

db.totalBookingCosts.insert(tbc.toArray());

db.totalMaintStaffSalary.insert(tsm.toArray());

db.totalCabinStaffSalary.insert(tsc.toArray());

db.totalBookingClerksSalary.insert(tsb.toArray());

db.totalPilotsSalary.insert(tsp.toArray());

db.totalPlaneHourlyCost.insert(tphc.toArray());

db.totalRefullingCost.insert(trc.toArray());

var bc = db.totalBookingCosts.findOne({}).sum;

var mss = db.totalMaintStaffSalary.findOne({}).sum;

var css = db.totalCabinStaffSalary.findOne({}).sum;

var bcs = db.totalBookingClerksSalary.findOne({}).sum;

var ps = db.totalPilotsSalary.findOne({}).sum;

var phc = db.totalPlaneHourlyCost.findOne({}).sum;

var rc = db.totalRefullingCost.findOne({}).sum;

var ts = mss+css+bcs+ps;

var tac = phc + rc;

//-----------------------------------------------------------Queries-------------------------------------------------------//

//db.journeys.findOne({ $and: [ {"startingairport" : "Heathrow"}, {"destairport": "Abu Dhabi"}]})

//db.pilots.findOne({"pid": 1}).name

//db.planeFlights.find({"pilots.pid" : 6}, {startingpoint: 1, destination: 1, _id: 0})

//db.planeFlights.find({"jID" : 101}).pretty()

//db.airports.aggregate([ {$project: {totalcost: {$add : ["$totalcost.phc","$totalcost.rc"]}}}])


// find the bookings made after 17th November 2016 assuming we know a customer named Oliva has already made a booking after that date.
//db.flightBookings.find({$and: [{bookingtime : {$gt : new Date(2016,11,17,00,00)}},{ customername: {$ne : "Oliva"}}]}, {fbID: 1,bcID:1, customername:1,Bookingtime:1,_id:0})

//Find the planes that are broken
//db.planes.find({status:'in repair'}).count()	

// find the most common journey flight NOTE: I'm not sure how to get journey name since it's in an array in journeys collection
//db.planeFlights.aggregate([ {$group:{_id: "$jID",total: {$sum: 1}}}, {$sort: {total:-1}}, {$limit:2} ])

//find the customer who has made more than one flight booking 
//db.flightBookings.aggregate([{"$group" : {_id: "$customername", customername : {$first: "$customername"}, "count": {$sum:1} } }, {$match: {"count" : {$gt :1} } }, {$project: {"customername": 1, _id:0} } ] )
