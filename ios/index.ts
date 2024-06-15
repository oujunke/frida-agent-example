import {printClass,hookClassMethod, printMethod} from "./iosFun.js"

//printClass(['enc','mbedtls','gcm','curve','25519']);
//hookClassMethod(['25519','json']);
//hookClassMethod(['NSJSONSerialization','INJSONEncoder']);
hookClassMethod(['NSData'],['URLSafeBase64EncodedString']);
//printClass(['json']);
//printMethod(null,['mbedtls','gcm','setkey'])
//printMethod(null,['base64']);