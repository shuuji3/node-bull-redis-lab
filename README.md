# node-bull-redis-lab

🧪 An Experiment of Job-Queue System in Node.js with Bull & Redis.

## Usage

```console
docker-compose up
```

This will create `task` and `external` queues and put 5 sample jobs to each queue.

## Execute Example

```console
> docker-compose up
Starting bull-test_redis_1 ... done
Starting bull-test_queue_1 ... done
Attaching to bull-test_redis_1, bull-test_queue_1
redis_1  | 1:C 12 Feb 2020 01:12:03.671 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1  | 1:C 12 Feb 2020 01:12:03.671 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1  | 1:C 12 Feb 2020 01:12:03.671 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1  | 1:M 12 Feb 2020 01:12:03.675 * Running mode=standalone, port=6379.
redis_1  | 1:M 12 Feb 2020 01:12:03.675 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1  | 1:M 12 Feb 2020 01:12:03.675 # Server initialized
redis_1  | 1:M 12 Feb 2020 01:12:03.675 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1  | 1:M 12 Feb 2020 01:12:03.677 * DB loaded from disk: 0.001 seconds
redis_1  | 1:M 12 Feb 2020 01:12:03.678 * Ready to accept connections
queue_1  | [task] 🔧 process job...
queue_1  | [task] data: { name: 'task-0', value: 0 }
queue_1  | [task] 🔧 process job...
queue_1  | [task] data: { name: 'task-1', value: 1 }
queue_1  | [task] 🔧 process job...
queue_1  | [task] data: { name: 'task-2', value: 4 }
queue_1  | [task] 🔧 process job...
queue_1  | [task] data: { name: 'task-3', value: 9 }
queue_1  | [task] 🔧 process job...
queue_1  | [task] data: { name: 'task-4', value: 16 }
queue_1  | [external] 🔧 process external job...
queue_1  | [external] data: { name: 'task-0', value: 0 }
queue_1  | [external] 🔧 process external job...
queue_1  | [external] data: { name: 'task-1', value: 1 }
queue_1  | [external] 🔧 process external job...
queue_1  | [external] data: { name: 'task-2', value: 4 }
queue_1  | [external] 🔧 process external job...
queue_1  | [external] data: { name: 'task-3', value: 9 }
queue_1  | [external] 🔧 process external job...
queue_1  | [external] data: { name: 'task-4', value: 16 }
^CGracefully stopping... (press Ctrl+C again to force)
Stopping bull-test_queue_1 ... done
Stopping bull-test_redis_1 ... done
```
