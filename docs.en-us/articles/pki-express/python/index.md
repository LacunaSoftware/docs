# Using PKI Express on Python

This article describes how to use [PKI Express](../index.md) on Python

## Sample project

The sample project shows the usage of PKI Express together with the [Web PKI](../../web-pki/index.md) browser component
on a **Python** project. It is hosted on GitHub:

https://github.com/LacunaSoftware/PkiExpressSamples/tree/master/Python

> [!NOTE]
> If you are using a previous version of Ptyhon, please [contact us](https://www.lacunasoftware.com/en/home/purchase).

### Running the project

1. [Install PKI Express](../setup/index.md)
1. [Download the project](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiExpressSamples.git)
1. In a command prompt, navigate to the folder `Python` and run the command `pip install -r requirements.txt` to download the dependencies
1. Define the `FLASK_APP` environment variable to define the name of app the should be run: `FLASK_APP=sample`
1. Run the web application: `flask run` or `python -m flask run`
1. Access the URL: http://localhost:5000

Optionally, you can create and activate a "virtualenv" to avoid mixing library versions:

[!include[virtualenv](../../../../includes/pki-express/python/virtualenv.md)]

### PyPi package

In order to use PKI Express on Python, you must includ the PyPi package [pkiexpress](https://pypi.org/project/pkiexpress)

To add it to your project, add the line below to your `requirements.txt` file:

[!include[requirements.txt](../../../../includes/pki-express/python/requirements.md)]

After that, do a `pip install -r requirements.txt` to download the package and its dependencies.

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/PkiExpressPython). Feel free to fork it if you need to make any customizations, and even submit an *pull request*.