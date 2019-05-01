package StepDefination;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class TdatamapStepDefination {
	WebDriver driver;
	@Given("^User is already on login page$")
	public void user_already_on_login_page(){

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Shri Gajanan\\workspace123\\Cucumbert\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("file:///G:/JAva%20BAtch/Selenium%20Software/Offline%20Website/index.html");
		
	}
	
	@When ("^title of login page is Admin LTE$")
	public void title_of_login_page_is_Admin_LTE(){
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("AdminLTE 2 | Log in", title);
	}
	
	@Then("^User inputs username and password$")
	public void user_inputs_username_and_password(DataTable credentials) throws Throwable {
		for(Map<String,String> data:credentials.asMaps(String.class, String.class)){
		
		
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(data.get("username"));
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(data.get("password"));
		}
	}

	@Then("^User clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		WebElement loginbtn = driver.findElement(By.xpath("//button[@type='submit']"));
	 JavascriptExecutor js = (JavascriptExecutor)driver;
	 js.executeScript("arguments[0].click();", loginbtn);
	}

@Then("^User is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("AdminLTE 2 | Dashboard", title);
	}


@Then("^User clicks Users$")
public void user_clicks_Users() throws Throwable {
	
	Actions action = new Actions(driver);
action.moveToElement(driver.findElement(By.xpath("/html/body/div/aside[1]/section/ul/li[3]/a"))).click().build().perform();  
}

@Then("^User clicks Add User$")
public void user_clicks_Add_User() throws Throwable {
driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div/div/div/div[1]/a/button")).click();

}

@Then("^User enters detais$")
public void user_enters_detais(DataTable tdata) throws Throwable {
	for(Map<String,String> tvalue:tdata.asMaps(String.class, String.class)) 
{
	driver.findElement(By.id("username")).sendKeys(tvalue.get("Username"));
	driver.findElement(By.id("mobile")).sendKeys(tvalue.get("Mobile"));
	driver.findElement(By.id("email")).sendKeys(tvalue.get("Email"));
	driver.findElement(By.id("submit")).click();
	driver.findElement(By.id("Male")).click();
	driver.findElement(By.xpath("/html/body/div/div[1]/section[2]/div/div/div/form/div[1]/div[5]/div/select/option[2]")).click();
	driver.findElement(By.id("password")).sendKeys("password");
	Thread.sleep(5000);
//	Select oSelect = new Select(driver.findElement(By.xpath("/html/body/div/div[1]/section[2]/div/div/div/form/div[1]/div[5]/div/select")));
//
//	oSelect.selectByVisibleText("Maharashtra");
//	driver.findElement(By.id("password")).sendKeys(arg6);
	Actions action = new Actions(driver);
	action.moveToElement(driver.findElement(By.xpath("/html/body/div/aside[1]/section/ul/li[3]/a"))).click().build().perform(); 
	driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div/div/div/div[1]/a/button")).click();
}
	
	
}
@Then("^User clicks operator$")
public void user_clicks_operator() throws Throwable {
	driver.findElement(By.xpath("/html/body/div/aside[1]/section/ul/li[4]/a")).click();
}

@Then("^User clicks home$")
public void user_clicks_home() throws Throwable {
	driver.findElement(By.xpath("/html/body/div/div[1]/section[1]/ol/li[1]/a")).click();
	System.out.println("link click fail");
}


@Then("^user clicks logout$")
public void user_clicks_logout() throws Throwable {
	driver.findElement(By.xpath("/html/body/div/aside[1]/section/ul/li[5]/a")).click();
}

}
