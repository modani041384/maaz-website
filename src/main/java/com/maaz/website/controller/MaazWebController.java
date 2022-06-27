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
        //TODO
        return "home"; //view
    }

    //end
}
