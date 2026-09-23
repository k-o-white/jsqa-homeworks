//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find((item) => item.hash === hash); 
        if (!!objectInCache) { 
            const result = objectInCache.value;
            console.log("Из кеша: " + result); 
            return "Из кеша: " + result;
        }
        let result = func(...args); 
        cache.push({"hash": hash, "value": result}); 
        if (cache.length > 5) { 
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) { 
    let timeoutId = null; 
    let firstCall = true; 
    function wrapper(...args) { 
        wrapper.allCount++; 
        if (!!firstCall) { 
            func(...args); 
            wrapper.count++; 
            firstCall = false; 
            return; 
        } 
        if (timeoutId !== null) { 
            clearTimeout(timeoutId); 
        } 
        timeoutId = setTimeout(() => { 
            timeoutId = null; 
            func(...args); 
            wrapper.count++; 
        }, delay); 
    } 
    wrapper.count = 0; 
    wrapper.allCount = 0; 
    return wrapper; 
}