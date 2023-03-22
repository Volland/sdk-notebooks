FROM python:3.9.12-alpine3.15

# Install required packages
RUN apk add --update --virtual=.build-dependencies alpine-sdk nodejs ca-certificates musl-dev gcc make cmake g++ gfortran libpng-dev freetype-dev libxml2-dev libxslt-dev

RUN apk add --update npm \
  # jupyter
  libffi-dev \
  # requirements pandas pillow
  jpeg-dev

# Install Jupyter
RUN pip install jupyter
# Install Jupyter book 
RUN pip install -U jupyter-book
# RUN pip install ipywidgets
RUN jupyter nbextension enable --py widgetsnbextension

# Install JupyterLab
RUN pip install jupyterlab && jupyter serverextension enable --py jupyterlab

ENV LANG=C.UTF-8

# Install Python Packages & Requirements (Done near end to avoid invalidating cache)
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Install TS & ES6 support
RUN npm install -g tslab && \
  tslab install

# Optional Clean-up
RUN apk del .build-dependencies && \
  rm -rf /var/cache/apk/*

# Expose Jupyter port & cmd
EXPOSE 8888
RUN mkdir -p /opt/app/data
RUN mkdir -p /opt/app/book
CMD jupyter lab --ip=* --port=8888 --no-browser --notebook-dir=/opt/app/data --allow-root