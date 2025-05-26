global
    log stdout format raw local0
    daemon
    maxconn 2048

defaults
    mode http
    log global
    option httplog
    timeout connect 5s
    timeout client  50s
    timeout server  50s
    retries 3

frontend http-in
    bind *:80
    default_backend web-backend

backend web-backend
    balance roundrobin
    option httpchk
    server node1 192.168.0.77:8080 check
    server node2 192.168.10.14:8080 check
    server node3 192.168.0.127:8080 check



root@docker-m1:/etc/haproxy# docker service create   --name haproxy-service   --network apache-network   --publish published=80,target=80,protocol=tcp,mode=host   --config source=haproxy-config,target=/etc/haproxy/haproxy.cfg   haproxytech/haproxy-debian:2.0

