function clear(b){
	var l=b.childNodes
	for (var ci=l.length-1;ci>=0;ci--){
		if (!l[ci].classList){
			b.removeChild(l[ci])
		}
		else{
			l[ci]=clear(l[ci])
		}
	}
	return b
}
window.onload=function(){
	var pr=clear(document.getElementsByClassName("diamond")[0]),tm=null
	pr.lastChild.onmouseover=function(){
		pr.classList.add("o")
		pr.classList.remove("c")
		if (tm!=null){clearTimeout(tm)}
	}
	pr.lastChild.onmouseout=function(){
		pr.classList.add("c")
		if (tm!=null){clearTimeout(tm)}
		tm=setTimeout(function(){
			pr.classList.remove("o")
			pr.classList.remove("c")
		},1500)
	}
}
