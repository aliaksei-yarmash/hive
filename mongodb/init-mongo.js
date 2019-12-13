db.createUser({
  user: 'ubuntu',
  pwd: 'ubuntu',
  roles: [{
    role: 'readWrite',
    db: 'ubuntu-db'
  }]
})
