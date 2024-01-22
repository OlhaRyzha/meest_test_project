### Local development

- create read_registry access token in gitlab 

- create .env (copy from provisioning/.env-local) and .env-secure (copy from provisioning/.env-secure) files and update params if its needed

- login to docker repository from local

```sh
docker login -u <GITLAB_LOGIN> -p <ACCESS_TOKEN> https://git-registry.meest.com:443
```

- run local docker compose

```sh
docker-compose -f ./provisioning/docker-compose-local.yml --project-directory . up --build  
```

#### Notice

Docker image for local development adds developer user to run commands and php-fpm process. By default it uses UID=1000 and GID=1000.
If your local user have different UID\GID please update your `.env` file

```sh
DEV_UID=<user uid>
DEV_GID=<user gid>  
```

If permission problem still persists, for example if you ran previous version of development docker image, fix permissions for whole code tree before run `docker compose up --build`:

```sh
[sudo] chown -R user:group <project>
```
