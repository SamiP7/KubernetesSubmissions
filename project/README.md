Create image from Dockerfile

Deploy this image to kubernetes cluster (remember to import image to k3d by: k3d image import (image-name))

From logs it can be seen that the server has started

The port can be changed by:  kubectl set env deployment/name* PORT=NNNN

Can be accessed on browser by port forwarding: kubectl port-forward *podname anyfreeport:*selectedport(default 8000)

Deployment can also be done by manifest now by: kubectl apply -f manifests/deployment.yaml (image still has to be imported to k3d)

Service is done by: kubectl apply -f manifests/service.yaml (no need to manually port forward no longer, app can be found on localhost:8082)
