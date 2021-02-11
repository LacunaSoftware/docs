```java
import com.lacunasoftware.restpki.RestPkiOptions;
import com.lacunasoftware.restpki.RestPkiService;
import com.lacunasoftware.restpki.RestPkiServiceFactory;

RestPkiOptions options = new RestPkiOptions();
options.setEndpoint("RestPkiEndpoint");
options.setApiKey("RestPkiApiKey");
RestPkiService service = RestPkiServiceFactory.getService(options);
```