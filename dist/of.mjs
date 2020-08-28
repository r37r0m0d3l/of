function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const e="Unknown Error";function ofAny(r,t,o,n){let s;switch(r.constructor.name||Object.prototype.toString.call(r)){case"Promise":s=r;break;case"AsyncFunction":s=r(...Array.isArray(t)?[...t]:[]);break;case"Function":s=new Promise((e,o)=>{try{e(r(...Array.isArray(t)?[...t]:[]))}catch(e){o(e)}});break;case"GeneratorFunction":s=new Promise((e,o)=>{const n=r(...Array.isArray(t)?[...t]:[]);try{e(n.next().value)}catch(e){o(e)}});break;case"[object Generator]":s=new Promise((e,t)=>{try{e(r.next().value)}catch(e){t(e)}});break;default:s=new Promise((e,t)=>{Promise.resolve(r).then(e).catch(t)})}return Promise.resolve(s).then(e=>[e]).catch(r=>(null==r&&(r=new Error(e)),n instanceof Error?r=n:"string"==typeof n&&(r.message=n),[o,r]))}function ofAnyCase(r,t={}){{const{args:e,defaults:r,error:o,retries:n,timeout:s}={...t};t={args:e,defaults:r,error:o,retries:n,timeout:s}}let o;switch(r.constructor.name||Object.prototype.toString.call(r)){case"Promise":o=r,t.retries=0,delete t.args;break;case"AsyncFunction":o=r(...Array.isArray(t.args)?[...t.args]:[]);break;case"Function":o=new Promise((e,o)=>{try{e(r(...Array.isArray(t.args)?[...t.args]:[]))}catch(e){o(e)}});break;case"GeneratorFunction":o=new Promise((e,o)=>{const n=r(...Array.isArray(t.args)?[...t.args]:[]);try{e(n.next().value)}catch(e){o(e)}});break;case"[object Generator]":o=new Promise((e,t)=>{try{e(r.next().value)}catch(e){t(e)}}),delete t.args;break;default:o=new Promise((e,t)=>{Promise.resolve(r).then(e).catch(t)}),delete t.args}if(void 0!==t.timeout){const e=Number.parseInt(""+t.timeout);Number.isFinite(e)&&e>0?t.timeout=e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e:delete t.timeout}else delete t.timeout;return(t.timeout?Promise.race([Promise.resolve(o),new Promise((e,r)=>{setTimeout(()=>r(new Error(`Timeout: ${t.timeout}ms`)),t.timeout)})]):Promise.resolve(o)).then(e=>[e]).catch(o=>{if(void 0!==t.retries){const e=Number.parseInt(t.retries);Number.isFinite(e)&&e>0?t.retries=e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e:delete t.retries}else delete t.retries;return t.retries&&(t.attempt=void 0===t.attempt?0:t.attempt+1,t.attempt<t.retries)?ofAnyCase(r,t):(null==o&&(o=new Error(e)),t.error instanceof Error?o=t.error:"string"==typeof t.error&&(o.message=t.error),[t.defaults,o])})}function ofCase(r,t={}){{const{args:e,defaults:r,error:o,timeout:n}={...t};t={args:e,defaults:r,error:o,timeout:n}}if(void 0!==t.timeout){const e=Number.parseInt(""+t.timeout);Number.isFinite(e)&&e>0?t.timeout=e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e:delete t.timeout}else delete t.timeout;return(t.timeout?Promise.race([Promise.resolve(r),new Promise((e,r)=>{setTimeout(()=>r(new Error(`Timeout: ${t.timeout}ms`)),t.timeout)})]):Promise.resolve(r)).then(e=>[e,void 0]).catch(r=>(null==r&&(r=new Error(e)),t.error instanceof Error?r=t.error:"string"==typeof t.error&&(r.message=t.error),[t.defaults,r]))}function ofError(r,t){return Promise.resolve(r).then(()=>{}).catch(r=>(null==r&&(r=new Error(e)),t instanceof Error?r=t:"string"==typeof t&&(r.message=t),r))}function ofIt(r,t,o){return Promise.resolve(r).then(e=>[e]).catch(r=>(null==r&&(r=new Error(e)),o instanceof Error?r=o:"string"==typeof o&&(r.message=o),[t,r]))}function of(r){return Promise.resolve(r).then(e=>[e]).catch(r=>(null==r&&(r=new Error(e)),[void 0,r]))}function ofResult(e,r){return Promise.resolve(e).then(e=>e).catch(()=>r)}function ofSync(r,t,o,n){if(!function isFunction(e){return"[object Function]"===Object.prototype.toString.call(e)&&!/^class\s/.test(Function.prototype.toString.call(e))}(r))return[void 0,new Error(e)];try{return[r(...Array.isArray(t)?[...t]:[]),void 0]}catch(r){let t;return n instanceof Error?t=n:"string"==typeof n?(r.message=n,t=r):t=null==r?new Error(e):r,[o,t]}}function ofOutcome(e,r={}){return new Promise(t=>ofAnyCase(e,r).then(([e,r])=>{t(r||e)}))}class Of{}_defineProperty(Of,"any",ofAny),_defineProperty(Of,"anyCase",ofAnyCase),_defineProperty(Of,"case",ofCase),_defineProperty(Of,"error",ofError),_defineProperty(Of,"it",ofIt),_defineProperty(Of,"async",of),_defineProperty(Of,"result",ofResult),_defineProperty(Of,"sync",ofSync),_defineProperty(Of,"outcome",ofOutcome);export{Of,of,ofAny,ofAnyCase,ofCase,ofError,ofIt,ofOutcome,ofResult,ofSync};
//# sourceMappingURL=of.mjs.map
