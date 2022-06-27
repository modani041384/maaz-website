package com.maaz.website.utils;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import okhttp3.*;
import org.springframework.http.MediaType;

import java.io.IOException;

/**
 * @author modani
 */
@Slf4j
public class HttpOkUtils {
    private static final String CONTENT_TYPE = "Content-Type";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer ";
    private static final String CHARSET = "application/json; charset=utf-8";

    /**
     * Call API by Get
     * @param url
     * @param token
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T callApiByGet(String url, String token, Class<T> clazz) {
        Request request = new Request.Builder()
                .url(url)
                .addHeader(CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .addHeader(AUTHORIZATION, BEARER + token)
                .get()
                .build();
        return getResponse(request, clazz);
    }

    /**
     * Call API with json by Post
     * @param json
     * @param url
     * @param token
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T callApiWithJsonByPost(String json, String url, String token, Class<T> clazz) {
        // json request body
        RequestBody body = RequestBody.create(json, okhttp3.MediaType.parse(CHARSET));
        Request request = new Request.Builder()
                .url(url)
                .addHeader(CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .addHeader(AUTHORIZATION, BEARER + token)
                .post(body)
                .build();
        return getResponse(request, clazz);
    }

    /**
     * Get response by json
     * @param request
     * @param clazz
     * @param <T>
     * @return
     */
    private static <T> T getResponse(Request request, Class<T> clazz) {
        try {
            OkHttpClient client = new OkHttpClient();
            Call call = client.newCall(request);
            Response response = call.execute();
            Gson gson = new Gson();
            return gson.fromJson(response.body().string(), clazz);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    //end
}
