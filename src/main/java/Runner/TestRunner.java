package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="C:\\Users\\Shri Gajanan\\workspace123\\Cucumbert\\src\\main\\java\\Features\\tdatamap.feature",	
	glue={"StepDefination"},
		//format = {"pretty","html:test-output","json:output_out/cucumber.json","junit:output_out/report.xml"},
			plugin = { "pretty" ,"html:target/cucumber-reports","junit:target/cucumber-reports/Cucumber.xml"},
		monochrome = true,
		dryRun = false
	
		)

public class TestRunner {
	/* Hi */
	
	
}
