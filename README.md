# YAO CRM DEMO

![Image](docs/images/intro.jpg)

[中文介绍](README.zh-CN.md)

Customer Management System Demo

Documentation: [https://yaoapps.com/en-US/doc](https://yaoapps.com/en-US/doc/Introduction/Getting%20Started)

## USAGE

### Docker

MySQL(Optional)

```bash
docker run -d -p 3307:3306 --restart unless-stopped -e MYSQL_PASSWORD=123456 yaoapp/mysql:8.0-amd64
```

```bash
docker run -d -p 5099:5099 --restart unless-stopped \
    -e YAO_INIT=demo \
    -e YAO_PROCESS_RESET=flows.init.menu \
    -e YAO_PROCESS_DEMO=flows.demo.fake \
    -e YAO_DB_DRIVER=mysql \
    -e YAO_DB_PRIMARY="yao:123456@tcp(172.17.0.1:3307)/yao?charset=utf8mb4&parseTime=True&loc=Local" \
    yaoapp/demo-crm:1.0.0-amd64
```

### Yao

#### Download source code

```bash
git clone https://github.com/YaoApp/demo-crm /app/path/crm

```

#### Set the environment variables

```bash

mkdir /app/path/crm/data
mkdir /app/path/crm/logs

cat << EOF
YAO_ENV=development # development | production
YAO_ROOT="/app/path/crm"
YAO_HOST="0.0.0.0"
YAO_PORT="5099"
YAO_SESSION="memory"
YAO_LOG="/app/path/crm/logs/application.log"
YAO_LOG_MODE="TEXT"  #  TEXT | JSON
YAO_JWT_SECRET="bLp@bi!oqo-2U+hoTRUG"
YAO_DB_DRIVER=mysql
YAO_DB_PRIMARY="yao:123456@tcp(172.17.0.1:3307)/yao?charset=utf8mb4&parseTime=True&loc=Local"  # Replace your setting
EOF > /app/path/crm/.env
```

#### Initialization

```bash
cd /app/path/crm

# Create tables & set menu
yao migrate --reset
yao run flows.init.menu

# Demo data
yao run flows.demo.fake

```

#### Start the service

```bash
cd /app/path/crm
yao start
```

## ADMIN

Open the browser to visit the URL:

http://127.0.0.1:5099/xiang/login/admin

User Name: `xiang@iqka.com`
Password: `A123456p+`
