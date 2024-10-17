db = db.getSiblingDB('db-s1');

db.createUser({
  user: 'db-user-s1',
  pwd: 'db-pass-s1',
  roles: [
    {
      role: 'readWrite',
      db: 'db-s1'
    }
  ]
});

