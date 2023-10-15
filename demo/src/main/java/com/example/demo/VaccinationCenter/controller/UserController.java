// package com.example.demo.VaccinationCenter.controller;

// import java.util.ArrayList;
// import java.util.List;


// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.VaccinationCenter.entity.User;

// @RestController
// @RequestMapping("users")
// public class UserController {
    
//     private final List<User> repositoryUsers;

//     public UserController(){
//         repositoryUsers = new ArrayList<>();
//         repositoryUsers.add(new User("toto", "toto"));

//     }

//     @GetMapping()
//     public List<User> user() {
//         return repositoryUsers;
//     }

//     @PostMapping()
//     public User newUser(@RequestBody User newUser){
//         repositoryUsers.add(newUser);
//         return newUser;
//     }

// }
