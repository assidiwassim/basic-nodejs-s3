db = db.getSiblingDB('mydb');

db.createUser({
  user: 'db-user-s3',
  pwd: 'db-pass-s3',
  roles: [
    {
      role: 'readWrite',
      db: 'mydb'
    }
  ]
});

//  mongodb://db-user-s3:db-pass-s3@51.77.210.239:27017/mydb