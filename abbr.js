function styleAbbr() {
	var oldBodyText, newBodyText, reg
	if (isIE) {
		oldBodyText = document.body.innerHTML;
		reg = /<ABBR([^>]*)>([^<]*)<\/ABBR>/g;
		newBodyText = oldBodyText.replace(reg, '<ABBR $1><SPAN class=\"abbr\" $1>$2</SPAN></ABBR>');
		document.body.innerHTML = newBodyText;
	}
}

function setSpan() {
	var abbrs, span, abbrText
	abbrs = document.getElementsByTagName('abbr');
	for(i = 0; i < abbrs.length; i++) {
		span = document.createElement('span');
		span.setAttribute('title', abbrs[i].getAttribute('title'));
		abbrText = abbrs[i].nextSibling.data;
		span.appendChild(document.createTextNode(abbrText));
		document.body.replaceChild(span, abbrs[i]. nextSibling);
	}
}

window.onload = function(){
	styleAbbr()
};

isIE = (document.all) ? true:false;