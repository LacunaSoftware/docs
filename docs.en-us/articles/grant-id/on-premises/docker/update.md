# Updating GrantID on Docker

To update an [on-premises](../index.md) instance of [GrantID](../../index.md) on Docker, follow the steps below. For other platforms, [click here](../index.md#platforms).

For Docker-based setup the following image is provided on Docker Hub:

<br />
<center>
**[GrantID Docker Image](https://hub.docker.com/r/lacunasoftware/grantid)**
</center>
<br />

The currently recommended image is `lacunasoftware/grantid:4.5`

Available moving tags:

* Tag `4.5` points to the latest 4.5.x image **(currently recommended)**
* Tag `4` points to the lastest 4.x image
* Tag `stable` points to the latest stable image

## Updating Guidelines

Before updating your container, it is recommended to check the [Changelog](../../changelog.md) to see what has changed from your 
current version to the latest one available.

If any of the versions included in the update have database model changes ("Updates database model: yes") then you
should procceed carefully as the container will attempt to update the database upon startup.

In this scenario, it is recommended to choose one of the following options:

* Reduce the number of running containers to 1.
* Allow only one container to update the database. This is done by adding the following settings to all but one container:

```sh
Application__AutoUpdateDatabase=false
```

Finally, to update simply pull the image with tag corresponding to the desired version and run the container.

## See also

* [Setup on Docker](index.md)
