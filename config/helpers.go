package helpers

import (
	"encoding/csv"
	"errors"
	"io"
	"log"
	"os"
	"strconv"
	"strings"
)

func ReadCSVFile(filePath string) ([][]string, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	reader := csv.NewReader(file)
	data, err := reader.ReadAll()
	if err != nil {
		return nil, err
	}

	return data, nil
}

func ConvertStringToFloat(str string) (float64, error) {
	str = strings.TrimSpace(str)
	value, err := strconv.ParseFloat(str, 64)
	if err != nil {
		return 0, err
	}

	return value, nil
}

func ConvertStringToInt(str string) (int, error) {
	str = strings.TrimSpace(str)
	value, err := strconv.Atoi(str)
	if err != nil {
		return 0, err
	}

	return value, nil
}

func WriteToFile(data string, filePath string) error {
	file, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	_, err = io.WriteString(file, data)
	if err != nil {
		return err
	}

	return nil
}

func CheckIfFileExists(filePath string) bool {
	fileInfo, err := os.Stat(filePath)
	if os.IsNotExist(err) {
		return false
	}

	if err != nil {
		log.Fatal(err)
	}

	return !fileInfo.IsDir()
}

func ValidateInput(data []string) error {
	if len(data) == 0 {
		return errors.New("input data is empty")
	}

	for _, str := range data {
		if strings.TrimSpace(str) == "" {
			return errors.New("input data contains empty strings")
		}
	}

	return nil
}