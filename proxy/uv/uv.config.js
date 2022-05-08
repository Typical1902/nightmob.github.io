const split=location.hostname.split('.');const domain=split.slice(0).slice(-(split.length===4?3:2)).join('.')
self.__uv$config={prefix:'/service/',bare:'https://client.'+domain+'/',encodeUrl:Ultraviolet.codec.xor.encode,decodeUrl:Ultraviolet.codec.xor.decode,handler:'/uv/uv.handler.js',bundle:'/uv/uv.bundle.js',config:'/uv/uv.config.js',sw:'/uv/uv.sw.js',};
