package com.maaz.website.controller;

import com.maaz.website.consts.UrlPath;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

@Controller
@Slf4j
public class MaazWebController {

    @GetMapping(value = UrlPath.MAAZ_HOME)
    public String main(Model model, HttpSession session) {
        model.addAttribute("page", "homepage");
        model.addAttribute("title", "Homepage");
        return "home"; //view
    }

    @GetMapping(value = "resources")
    public String resource(Model model, HttpSession session) {
        return "resources"; //view
    }

    
    @GetMapping(value = "resources/whitepaper")
    public String whitepaper(Model model, HttpSession session) {
        return "whitepaper"; //view
    }

    @GetMapping(value = "resources/details")
    public String details(Model model, HttpSession session) {
        return "blogdetails"; //view
    }

    @GetMapping(value = "resources/success-stories")
    public String successStories(Model model, HttpSession session) {
        return "success-stories"; //view
    }
    
    @GetMapping(value = "company/about-us")
    public String ourStory(Model model, HttpSession session) {
        return "our-story"; //view
    }

    @GetMapping(value = "company/contact-us")
    public String contactUs(Model model, HttpSession session) {
        return "contact-us"; //view
    }

    @GetMapping(value = "company/news")
    public String news(Model model, HttpSession session) {
        return "whitepaper"; //view
    }

    @GetMapping(value = "products")
    public String product(Model model, HttpSession session) {
        return "product"; //view
    }
    @GetMapping(value = "products/classic-platform/basic-software")
    public String classicPlatformBSW(Model model, HttpSession session) {
        return "products/classicplatform-bsw"; //view
    }
    
    @GetMapping(value = "products/classic-platform/studio")
    public String classicPlatformStudio(Model model, HttpSession session) {
        return "products/classicplatform-studio"; //view
    }
    
    @GetMapping(value = "products/adaptive-platform/basic-software")
    public String adaptivePlatformBSW(Model model, HttpSession session) {
        return "products/adaptiveplatform-bsw"; //view
    }
    @GetMapping(value = "products/adaptive-platform/studio")
    public String adaptivePlatformStudio(Model model, HttpSession session) {
        return "products/adaptiveplatform-studio"; //view
    }
    @GetMapping(value = "products/flash-bootloader/studio")
    public String flashBootloaderStudio(Model model, HttpSession session) {
        return "products/flashbootloader-studio"; //view
    }
    
    @GetMapping(value = "products/test-automation/studio")
    public String testAutomationStudio(Model model, HttpSession session) {
        return "products/testautomation-studio"; //view
    }
    
    @GetMapping(value = "services")
    public String services(Model model, HttpSession session) {
        return "services"; //view
    }
    //end
}
