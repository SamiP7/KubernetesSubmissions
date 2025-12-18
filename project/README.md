Create image from Dockerfile

Deploy this image to kubernetes cluster (remember to import image to k3d by: k3d image import (image-name))

From logs it can be seen that the server has started

The port can be changed by:  kubectl set env deployment/name* PORT=NNNN

Can be accessed on browser by port forwarding: kubectl port-forward *podname anyfreeport:*selectedport(default 8000)

Services switched to ingress, just apply all services by: kubectl apply -f manifests, and app is found at localhost:8081

Images added to front page that are persistently stored. Refresh every 10 minutes even if server crashes (stores the time when image was queried and compares it to current time, does this check every 30 seconds or when server is started and if more than 10 minutes has passed, it downloads and displays a new picture)

Contains some hardcoded todos and new ones are not yet added (max length 140 chars)
