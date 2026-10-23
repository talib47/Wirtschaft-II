# Baut index.html aus den Modulen in src/ zusammen:  python3 build.py
import os
d=os.path.join(os.path.dirname(os.path.abspath(__file__)),'src')
r=lambda f: open(os.path.join(d,f),encoding='utf-8').read()
order=['core.js','format.js','model.js','model2.js','content.js','content2.js','content3.js','wipocc.js','cardinfo.js','symbols.js','views.js','recall.js','who.js','session.js','plan.js','gfx2.js','exam.js','task.js','start.js']
out=r('head.html')+''.join(r(f).rstrip()+'\n\n' for f in order)+'</script>\n</body>\n</html>\n'
open(os.path.join(os.path.dirname(d),'index.html'),'w',encoding='utf-8').write(out)
print(len(out))
