# Use local git
# http://blog.grayghostvisuals.com/git/how-to-keep-git-updated/
export PATH=/usr/local/bin:$PATH;
export PATH=/usr/local/sbin:$PATH;
export PATH=/usr/local/opt/python/libexec/bin:$PATH;

# Load the shell dotfiles, and then some:
# * ~/.path can be used to extend `$PATH`.
# * ~/.extra can be used for other settings you don’t want to commit.
for file in ~/.{path,bash_prompt,exports,aliases,functions,profile,extra}; do
	[ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;

# Homeshick
#source ~/.homesick/repos/homeshick/homeshick.sh;

# Case-insensitive globbing (used in pathname expansion)
shopt -s nocaseglob;

# Autocorrect typos in path names when using `cd`
shopt -s cdspell;

# Add tab completion for many Bash commands
if which brew > /dev/null && [ -f "$(brew --prefix)/etc/bash_completion" ]; then
	source "$(brew --prefix)/etc/bash_completion";
elif [ -f /etc/bash_completion ]; then
	source /etc/bash_completion;
fi;

# Autojump
if which brew > /dev/null && [ -f "$(brew --prefix)/etc/profile.d/autojump.sh" ]; then
	source "$(brew --prefix)/etc/profile.d/autojump.sh";
elif [ -f /usr/share/autojump/autojump.sh ]; then
	source /usr/share/autojump/autojump.sh;
fi

# nvm

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
