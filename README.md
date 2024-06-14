### How to compile & load

```sh
$ git clone git://github.com/oleavr/frida-agent-example.git
$ cd frida-agent-example/
$ npm install
$ frida -U -f com.example.android --no-pause -l _agent.js
$ frida -U -f com.whatsapp -l _agent.js
$ frida -U -f com.whatsapp.w4b -l _agent.js >>logs/out.05121000.log
$ adb forward tcp:27042 tcp:27042
$ adb forward tcp:27043 tcp:27043
$ ssh -CfNg -L 27042:127.0.0.1:27042 root@192.168.101.223
$ ssh -CfNg -L 27043:127.0.0.1:27043 root@192.168.101.223
$ jnitrace -l libwhatsapp.so com.whatsapp.w4b >>out.03292251.log
$ frida -U -f net.whatsapp.WhatsApp -l _agent.js
```

### Development workflow

To continuously recompile on change, keep this running in a terminal:

```sh
$ npm run watch
```

And use an editor like Visual Studio Code for code completion and instant
type-checking feedback.
