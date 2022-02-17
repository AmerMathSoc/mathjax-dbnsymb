MPSVG=mpost -interaction=nonstopmode -s 'outputformat="svg"' -s 'outputtemplate="%j%c.svg"'

default:
	$(MPSVG) `kpsewhich dbnsymb.mf`

clean:
	-rm dbnsymb.[3-9]* *.log *~ *.svg *.png
