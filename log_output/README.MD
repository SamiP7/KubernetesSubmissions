Build the project.

Add the image to k3d with: k3d image import *imagename

Make a deployment of this image with kubectl.

Logs should show with kubectl logs -f ...

Now also deploying works just by giving the command kubectl apply -f manifests/deployment.yaml

Ingress is also added and services so deployment and services can be started with  kubectl apply -f manifests

String and datetime can be viewed on localhost 8081.
