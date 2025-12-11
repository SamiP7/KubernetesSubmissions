Build the image with docker.

Import it to k3d with: k3d image import *imagename

Apply manifests: kubectl apply -f manifests

Pong counter increases on the same localhost as the log output is located, just add /pingpong to the end of it.
