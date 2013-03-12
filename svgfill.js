/*! svgfill - chooses between svg and png/jpg images with svg support info from Modernizr. Load Modernizr before this file. Author: Ramkishore Manoharan 
usage example:
    <div data-svgfill data-svg="images/common/image1.svg(can be inline <svg></svg> element too)" data-bmp="images/common/image1.png" data-alt="image1-alt">
        <noscript>
            <img src="images/common/image1.png" alt="image1-alt">
        </noscript>
    </div>
*/

(function( w ){

    // Enable strict mode
    "use strict";

    w.svgfill = function() {
        var divs = w.document.getElementsByTagName( "div" );
        // Loop the data-svg divs
        for( var i = 0; i < divs.length; i++ ) {
            if( divs[ i ].getAttribute( "data-svgfill" ) !== null ) {
                var cdiv = divs [ i ], 
                img_src = null;
                if (Modernizr.svg) {
                    var svg_src = cdiv.getAttribute("data-svg");
					if (svg_src!==null){
						//test if the src is an svg file
						if (svg_src.split('.').pop() === 'svg') {
							img_src = svg_src;  
						}
						else {
							var svg_xml_regex=/^<svg/;
							/*for case where svg xml is added inline*/
							if(svg_xml_regex.test(svg_src)) {
								var e = document.createElement('div');
								e.innerHTML = svg_src;//the <svg> content is added inside the temporary div
								while (e.firstChild) {
									cdiv.appendChild( e.firstChild);
								}
							}
						}
					}
				}
                else {
                    var bmp_src = cdiv.getAttribute("data-bmp");
                    //test if the src is a png/jpg file
                    bmp_ext = bmp_src.split('.').pop();
                    if (bmp_ext !== 'png' || bmp_ext !== 'jpg') {
                        img_src = bmp_src;  
                    }
                }
                if (img_src !== null) {
                    var picImg = w.document.createElement( "img" );
                    picImg.alt = cdiv.getAttribute( "data-alt" );
                    cdiv.appendChild( picImg );
                    picImg.src = img_src;
                }                
            }
        }
    };
    // Run on domready (w.load as a fallback)
    if( w.addEventListener ){
        w.addEventListener( "DOMContentLoaded", function(){
            w.svgfill();
        }, false );
    }
    else if( w.attachEvent ){
        w.attachEvent( "onload", w.svgfill );
    }
    
}) ( this );