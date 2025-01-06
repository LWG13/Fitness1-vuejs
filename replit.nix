{ pkgs }: {
	deps = [
		pkgs.nodejs
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
	];
}