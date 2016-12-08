# vis-network-custom
vis network custom style 

### 0.0.1
    import vis network
    [demo](http://visjs.org/examples/network/other/manipulation.html)

### 0.0.2
    add click event for addNode、addEdge、deleteNode...
    still keep Hammer events

```
    clickable(document.querySelector('.vis-add'));

    //code for clickable
    export const clickable = (element) => {
			if (!element) {
					return;
			}
			if (/msie/i.test(navigator.userAgent)) {
				element.click();
			} else {
				let evt = new MouseEvent('click', {
				cancelable: true,
				bubble: true,
				view: window
				});
				element.dispatchEvent(evt);
			}
    };    
```