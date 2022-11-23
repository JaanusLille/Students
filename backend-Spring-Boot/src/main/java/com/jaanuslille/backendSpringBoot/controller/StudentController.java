package com.jaanuslille.backendSpringBoot.controller;

import com.jaanuslille.backendSpringBoot.exception.ResourceNotFoundException;
import com.jaanuslille.backendSpringBoot.model.Student;
import com.jaanuslille.backendSpringBoot.repository.StudentRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/students")

public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    // create student REST API
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    // get student by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable  long id){
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + id));
        return ResponseEntity.ok(student);
    }

    // update student REST API
    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable long id,@RequestBody Student studentDetails) {
        Student updateStudent = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + id));

        updateStudent.setFirstName(studentDetails.getFirstName());
        updateStudent.setLastName(studentDetails.getLastName());
        updateStudent.setEmailId(studentDetails.getEmailId());

        studentRepository.save(updateStudent);

        return ResponseEntity.ok(updateStudent);
    }

    // delete student REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable long id){

        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + id));

        studentRepository.delete(student);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}

