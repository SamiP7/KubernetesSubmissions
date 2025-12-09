Create image from Dockerfile

Deploy this image to kubernetes cluster (remember to import image to k3d by: k3d image import (image-name))

From logs it can be seen that the server has started

The port can be changed by:  kubectl set env deployment/name* PORT=NNNN

Can be accessed on browser by port forwarding: kubectl port-forward *podname anyfreeport:*selectedport(default 8000)

Services switched to ingress, just apply all services by: kubectl apply -f manifests, and app is found at localhost:8081
