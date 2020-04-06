### Start docker-compose:
docker-compose up -d

### Build image:
docker build -t nginx-image .

### Look inside container:
docker exec -t -i nginx-container /bin/bash

### Remove all containers:
docker container rm -f $(docker container ls -aq)

### Fetch and rebuild:
git fetch && git reset --hard origin/HEAD && docker-compose up -d --build
--force-recreate

### Run only one container:
docker build --tag <image-name> .
docker run -p 8000:8080 --detach --name <container-name> <image-name>

### Run only nginx container:
cd .. && git fetch && git reset --hard origin/HEAD && cd nginx && docker build --tag nginx . && docker container rm -f nginx-container && docker run -p 443:443 -p 80:80 --name nginx-container -v /certs:/certs nginx

### Look folder size:
du -h --max-depth=1 /var/lib/docker/

### Clear docker cache:
docker system prune -a
