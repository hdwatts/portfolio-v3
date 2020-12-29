if [ -z "$1" ]; then
	echo "No filename defined"
	exit
fi
cp base-post-template.md "./posts/$1.md"