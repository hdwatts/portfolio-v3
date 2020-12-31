if [ -z "$1" ]; then
	echo "No filename defined"
	exit
fi
cp ./scripts/base-post-template.md "./posts/$1.md"
mkdir "./public/img/$1"