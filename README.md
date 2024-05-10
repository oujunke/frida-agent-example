### How to compile & load

```sh
$ git clone git://github.com/oleavr/frida-agent-example.git
$ cd frida-agent-example/
$ npm install
$ frida -U -f com.example.android --no-pause -l _agent.js
$ frida -U -f com.whatsapp -l _agent.js
$ frida -U -f com.whatsapp.w4b -l _agent.js >>out.05091120.log
adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043
$ jnitrace -l libwhatsapp.so com.whatsapp.w4b >>out.03292251.log
```

### Development workflow

To continuously recompile on change, keep this running in a terminal:

```sh
$ npm run watch
```

And use an editor like Visual Studio Code for code completion and instant
type-checking feedback.
